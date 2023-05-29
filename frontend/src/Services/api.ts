export type milks = {
    id: number;
    name: string;
    type: string;
    storage: number;
    productId: string

}

export const getMilks = async () => {
    const postsApi: milks[] = await fetch(
      "http://localhost:5289/api/milkStore")
     .then((response) => response.json())
     .then((data) => data);
   return postsApi;
 };

