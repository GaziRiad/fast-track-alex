import { fetchCategories } from "@/services/api";
import BlogNav from "./BlogNav";

async function BlogNavigation() {
  const categories = await fetchCategories();

  return <nav>{<BlogNav data={categories} />}</nav>;
}

export default BlogNavigation;
