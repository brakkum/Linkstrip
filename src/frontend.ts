
export default class Linkstrip implements LinkstripInterface {

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
            fetch(`https://linkst.rip/api/newLink?url=${this.url}&slug=${this.slug}`)
                .then(res => res.json())
                .then(json => {
                    if (json.error) {
                        reject(json.error);
                    } else {
                        resolve(json.url);
                    }
                }).catch(e => reject(e));
        });
    };
}

