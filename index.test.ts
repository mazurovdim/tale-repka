import data from './data'
import Story from '.' 

test('Проверка длинны данных', () => {
    expect(data.length).toBe(7)
})

test('Проверка репки', () => {
    const story = new Story(data)
    const repka = story.getPerson(0)
    expect(repka.nominative).toBe('репка')
})

test('Проверка дедки', () => {
    const story = new Story(data)
    const repka = story.getPerson(0)
    expect(repka.next.nominative).toBe('дед')
})