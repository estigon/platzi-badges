const text = "hola mundo"

test('test de prueba ', () => {
    expect(text).toMatch(/mundo/)
})
