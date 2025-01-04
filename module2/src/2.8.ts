{
  //

  // Promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data!");
      }
    });
  };

  const loadData = async (): Promise<string> => {
    const res: string = await createPromise();
    return res;
    // console.log(res);
  };

  loadData();

  // Example

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  getTodo();

  //
}
