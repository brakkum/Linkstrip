
interface LinkstripInterface {
    url: string;
    slug: string;
    setUrl(url:string): void;
    setSlug(slug:string): void;
    getLinkAsync(): Promise<string>;
}
