import {Entry} from "../components/news/models";
import {NewsStore} from "./news";


test('store return entry list', async () => {
    const store = new NewsStore()
    const expectedNews = [
        {id: 1, title: 'title', content: 'content'} as Entry,
    ]
    const news = await store.list()

    expect(news).toStrictEqual(expectedNews)
});
