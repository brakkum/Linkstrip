const https = require("https");

export default class NodeLinkstrip implements LinkstripInterface {

    url: string = "";
    slug: string = "";

    constructor (url: string = "", slug: string = "") {
        this.url = url;
        this.slug = slug;
    }

    setUrl = (url: string) => {
        this.url = url;
    };

    setSlug = (slug: string) => {
        this.slug = slug;
    };

    getLinkAsync = async (): Promise<string> => {
        return new Promise((resolve, reject) => {
            https.get(`https://linkst.rip/api/newLink?url=${this.url}&slug=${this.slug}`, (res) => {
                let body = "";
                res.on("data", chunk => {
                    body += chunk;
                })

                res.on("end", () => {
                    let json = JSON.parse(body);
                    if (json.error !== undefined) {
                        reject(json.error);
                    } else {
                        resolve(json.url);
                    }
                });

                res.on("error", e => {
                    reject(e);
                });
            });
        });
    };
}
