import { client } from "@/blog/lib/client";

export async function fetchBlogs(filter, pageSize = 7) {
  try {
    const query = `
      {
        "posts": *[_type == "post" ${
          filter.category !== "view-all"
            ? `&& "${filter.category}" in categories[]->slug.current`
            : ""
        }] | order(publishedAt) [${(filter.page - 1) * pageSize}...${
          filter.page * pageSize
        }] {
          title,
          slug,
          readTime,
          publishedAt,
          author -> {name, image {
            asset -> {
              _id,
              url
            },
          }},
          summary,
          categories[]->{
            title,
            slug
          },
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        },
        "count": count(*[_type == "post" ${
          filter.category !== "view-all"
            ? `&& "${filter.category}" in categories[]->slug.current`
            : ""
        }])
      }
    `;

    const data = await client.fetch(query, { next: { revalidate: 0 } });

    return data; // data.posts will contain the posts, and data.count will contain the count
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    return { posts: [], count: 0 };
  }
}

export async function fetchCategories() {
  try {
    const data = await client.fetch(
      `*[_type == "category"] {
        title,
        slug,
    }
              `,
      { next: { revalidate: 0 } }
    );

    return data;
  } catch (err) {
    return console.log(err.message);
  }
}
