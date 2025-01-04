{
  //

  // Mapped Types
  const arrOfNumbers: number[] = [1, 2, 4];

  // const arrOfStrings: string[] = ['1', '2', '4'] // we can do the same thing by using mapped type

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // Lookup type

  // type AreaString = {
  //     height: string,
  //     width: string,
  // }

  // type AreaString = {
  //     [key in "height" | "width"] : string
  // }

  // type AreaString = {
  //     [key in keyof AreaNumber] : string
  // }

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
