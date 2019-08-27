import { NodeLinkstrip } from "./index";

// test("New url", async () => {
//     let ls = new NodeLinkstrip(`https://linkst.rip/?rand=${Math.random()}`);
//     await ls.getLinkAsync().then(url => {
//         expect(url).toContain("linkst.rip/");
//     });
// });

// test("New url with new slug", async () => {
//     let ls = new NodeLinkstrip(`https://linkst.rip/?rand=${Math.random()}`, (Math.random()).toString().replace(".", ""));
//     await ls.getLinkAsync().then(url => {
//         expect(url).toContain("linkst.rip/");
//     });
// });

// test("Duplicate url with new slug succeeds", async () => {
//     let ls = new NodeLinkstrip(`https://linkst.rip/`, (Math.random()).toString().replace(".", ""));
//     await ls.getLinkAsync().then(url => {
//         expect(url).toContain("linkst.rip/");
//     });
// });

test("Duplicate slug fails", async () => {
    let ls = new NodeLinkstrip("https://linkst.rip/", "pizza");
    await ls.getLinkAsync().catch(e => {
        expect(e).toBe("Slug already exists");
    });
});

test("Duplicate url returns predictable link", async () => {
    let ls = new NodeLinkstrip("https://github.com/brakkum/MyGig");
    await ls.getLinkAsync().then(url => {
        expect(url).toBe("linkst.rip/mygig");
    });
});

test("Invalid url fails", async () => {
    let ls = new NodeLinkstrip("lol");
    await ls.getLinkAsync().catch(e => {
        expect(e).toBe("Invalid Url");
    });
});

test("Short slug fails", async () => {
    let ls = new NodeLinkstrip("https://linkst.rip/", "1234");
    await ls.getLinkAsync().catch(e => {
        expect(e).toBe("Slug must be at least 5 characters");
    });
});

test("Long slug fails", async () => {
    let ls = new NodeLinkstrip("https://linkst.rip/", Array(101).fill("x").join(""));
    await ls.getLinkAsync().catch(e => {
        expect(e).toBe("Slug must be shorter than 100 characters");
    });
});

test("Get empty link fails", async () => {
    let ls = new NodeLinkstrip();
    await ls.getLinkAsync().catch(e => {
        expect(e).toBe("Invalid Url");
    });
});
