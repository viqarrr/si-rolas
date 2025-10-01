import React from "react";
import { router, useForm } from "@inertiajs/react";
// import { Head } from '@inertiajs/react';
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FileUploadInertia from "@/components/file-upload";
import QuillWrapper from "@/components/quill-wrapper";
import InlineNestedList from "@/components/inline-nested-list";
import AppLayout from "@/layouts/app-layout";
import type { Major } from "@/types";

interface FormData extends Major {
  competencies_to_delete: number[];
  career_prospects_to_delete: number[];
}

interface Props {
  majorData: any;
}

const majorDataProps = {
  id: 3,
  slug: "mechanical-engineering",
  title: "Mechanical Engineering",
  short_description: "Covers machines, automotive, and industrial systems.",
  detail: "Full detail text here...",
  logo: "https://via.placeholder.com/80x80.png?text=Mech",
  thumbnail: "https://via.placeholder.com/80x80.png?text=Mech",
  competencies: [
    {
      id: 1,
      title: "Judul",
      description: "Judul",
      image: "https://via.placeholder.com/80x80.png?text=Mech",
    },
  ],
  career_prospects: [
    {
      id: 1,
      title: "Judul",
      description: "Judul",
      image: "https://via.placeholder.com/80x80.png?text=Mech",
    },
  ],
};

export default function MajorsEdit({ majorData = majorDataProps }: Props) {
  const { data, setData, post, processing, progress } = useForm<FormData>({
    slug: majorData?.slug,
    title: majorData?.title,
    short_description: majorData?.short_description,
    detail: majorData?.detail,
    logo: majorData?.logo,
    thumbnail: majorData?.thumbnail,
    competencies: majorData?.competencies,
    career_prospects: majorData?.career_prospects,
    competencies_to_delete: [],
    career_prospects_to_delete: [],
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData for file uploads
    const formData = new FormData();

    // Add basic fields
    formData.append("slug", data.slug);
    formData.append("title", data.title);
    formData.append("short_description", data.short_description);
    formData.append("detail", data.detail);

    if (data.thumbnail) {
      formData.append("thumbnail", data.thumbnail);
    }

    // Add competencies
    data.competencies.forEach((competency, index) => {
      if (competency.id) {
        formData.append(`competencies[${index}][id]`, competency.id.toString());
      }
      formData.append(`competencies[${index}][title]`, competency.title);
      formData.append(
        `competencies[${index}][description]`,
        competency.description
      );
      if (competency.image instanceof File) {
        formData.append(`competencies[${index}][image]`, competency.image);
      }
    });

    // Add career prospects
    data.career_prospects.forEach((prospect, index) => {
      if (prospect.id) {
        formData.append(
          `career_prospects[${index}][id]`,
          prospect.id.toString()
        );
      }
      formData.append(`career_prospects[${index}][title]`, prospect.title);
      formData.append(
        `career_prospects[${index}][description]`,
        prospect.description
      );
      if (prospect.image instanceof File) {
        formData.append(`career_prospects[${index}][image]`, prospect.image);
      }
    });

    // Add deletion arrays
    data.competencies_to_delete.forEach((id, index) => {
      formData.append(`competencies_to_delete[${index}]`, id.toString());
    });
    data.career_prospects_to_delete.forEach((id, index) => {
      formData.append(`career_prospects_to_delete[${index}]`, id.toString());
    });

    // post(route('majors.store'), {
    //   data: formData,
    //   forceFormData: true,
    // });
  };

  return (
    <AppLayout>
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="space-y-6 p-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    Edit Major
                  </h1>
                  <p className="text-muted-foreground">
                    Update details for {majorData.title}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Thumbnail</Label>
                      <FileUploadInertia
                        value={data.thumbnail}
                        onChange={(file) => setData("thumbnail", file as File)}
                        placeholder="Upload major thumbnail"
                      />
                      {/* {errors.thumbnail && (
                  <p className="text-sm text-red-500">{errors.thumbnail}</p>
                )} */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={data.title}
                          onChange={(e) => handleTitleChange(e.target.value)}
                          placeholder="Major title"
                        />
                        {/* {errors.title && (
                    <p className="text-sm text-red-500">{errors.title}</p>
                  )} */}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="slug">Slug *</Label>
                        <Input
                          id="slug"
                          value={data.slug}
                          onChange={(e) => setData("slug", e.target.value)}
                          placeholder="major-slug"
                        />
                        {/* {errors.slug && (
                    <p className="text-sm text-red-500">{errors.slug}</p>
                  )} */}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="short_description">
                        Short Description
                      </Label>
                      <Textarea
                        id="short_description"
                        value={data.short_description}
                        onChange={(e) =>
                          setData("short_description", e.target.value)
                        }
                        placeholder="Brief description of the major"
                        rows={3}
                      />
                      {/* {errors.short_description && (
                  <p className="text-sm text-red-500">{errors.short_description}</p>
                )} */}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="detail">Detailed Description</Label>
                      <QuillWrapper
                        value={data.detail}
                        onChange={(value) => setData("detail", value)}
                        placeholder="Detailed description of the major"
                      />
                      {/* {errors.detail && (
                  <p className="text-sm text-red-500">{errors.detail}</p>
                )} */}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <InlineNestedList
                      items={data.competencies}
                      onItemsChange={(items) => setData("competencies", items)}
                      title="Competencies"
                      itemLabel="Competency"
                      showImage={true}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <InlineNestedList
                      items={data.career_prospects}
                      onItemsChange={(items) =>
                        setData("career_prospects", items)
                      }
                      title="Career Prospects"
                      itemLabel="Career Prospect"
                      showImage={true}
                    />
                  </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    // onClick={() => router.visit(route('majors.index'))}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={processing}>
                    <Save className="mr-2 h-4 w-4" />
                    {processing ? "Creating..." : "Create Major"}
                  </Button>
                </div>
              </form>

              {progress && (
                <div className="fixed bottom-4 right-4 bg-white border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="text-sm">Uploading...</div>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm">{progress.percentage}%</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
