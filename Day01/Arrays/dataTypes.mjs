const dataType = function () {
    const obj = Object.assign({});
    Object.defineProperties(obj, {
        number: {
            value: 1,
      },
        string: {
            value:
                "This is a string.",
        },
        boolean: {
            value: false,
        },
        undefined: {
            value: undefined,
        },
        object: {
            value: obj,
        },
    });
    return obj
}()

export default dataType;




