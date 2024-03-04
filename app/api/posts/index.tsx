import api from 'lib/ghost-client.ts';
export async function getPosts() {
    return await api.posts
      .browse({
        include: ["tags", "authors"],
        limit: 10
      })
      .catch(err => {
        throw new Error(err)
      });
}