const { user } = require("./overview");

test('object is not empty', () => {
    expect(user).not.toEqual({});
    
});