import {Entry} from "./models";
import {NewsStore} from "./store";


test('store return entry list', async () => {
    const store = new NewsStore()
    const expectedNews = [
        {id:1, title: 'title', content: 'content'} as Entry,
    ]
    const news = await store.list()

    expect(news).toStrictEqual(expectedNews)
});
