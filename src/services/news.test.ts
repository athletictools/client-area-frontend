import {Entry} from "../components/news/models";
import NewsService from "./news";


test('store return entry list', async () => {
    const store = new NewsService()
    const expectedNews = [
        {id: 1, title: 'title', content: 'content'} as Entry,
    ]
    const news = await store.list()

    expect(news).toStrictEqual(expectedNews)
});
