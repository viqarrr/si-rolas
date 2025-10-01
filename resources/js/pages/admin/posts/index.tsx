// resources/js/Pages/Posts/Index.tsx
import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import type { Post } from "@/types";
import AppLayout from "@/layouts/app-layout";

interface PostsIndexProps {
  posts: {
    data: Post[];
    links: any;
    meta: any;
  };
  filters: {
    search?: string;
    status?: string;
  };
}

const postsDummy = {
  data: [],
  links: [],
  meta: []
}

const postsFilterDummy = {
  search: '',
  status: '',
}

const PostsIndex: React.FC<PostsIndexProps> = ({ posts = postsDummy, filters = postsFilterDummy }) => {
  const [search, setSearch] = React.useState(filters.search || "");
  const [activeFilter, setActiveFilter] = React.useState(
    filters.status || "all"
  );
  const [deleteItem, setDeleteItem] = React.useState<Post | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // router.get(route('majors.index'), { search, active: activeFilter }, {
    //   preserveState: true,
    //   replace: true
    // });
  };

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    // router.get(route('majors.index'), { search, active: value }, {
    //   preserveState: true,
    //   replace: true
    // });
  };

  const handleDelete = () => {
    if (deleteItem) {
      // router.delete(route('majors.destroy', deleteItem.id), {
      //   onSuccess: () => setDeleteItem(null),
      // });
    }
  };

  return (
    <AppLayout>
      {/* <Head title="Posts" /> */}
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
              <p className="text-muted-foreground">
                Manage blog posts and articles
              </p>
            </div>
            <Button asChild>
              {/* <Link href={route("posts.create")}> */}
              <Link href={"/postingan/create"}>
                <Plus className="mr-2 h-4 w-4" />
                Add Post
              </Link>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
              <CardDescription>
                A list of all blog posts and articles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center space-x-2"
                >
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search majors..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-8 w-64"
                    />
                  </div>
                </form>

                <Select value={activeFilter} onValueChange={handleFilterChange}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>

              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Post</TableHead>
                    <TableHead>Excerpt</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.data.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center text-muted-foreground"
                      >
                        No posts found
                      </TableCell>
                    </TableRow>
                  ) : (
                    posts.data.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            {post.image_url && (
                              <img
                                src={post.image_url}
                                alt={post.title}
                                className="h-10 w-10 rounded-md object-cover"
                              />
                            )}
                            <div>
                              <div className="font-medium">{post.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {post.slug}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="truncate text-sm">{post.excerpt}</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              post.status === "published"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {post.published_at
                            ? new Date(post.published_at).toLocaleDateString()
                            : "-"}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(post.updated_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm" asChild>
                              {/* <Link href={route("posts.show", post.id)}> */}
                              <Link href={"/postingan/show"}>
                                <Eye className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              {/* <Link href={route("posts.edit", post.id)}> */}
                              <Link href={"/postingan/edit"}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete()}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default PostsIndex;
