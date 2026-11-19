"use client";
import { useId, useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/api";
export function ImageUpload({
  value,
  onChange,
  label = "Image",
  required = false,
}: {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  required?: boolean;
}) {
  const [busy, setBusy] = useState(false);
  const id = useId();
  async function upload(file?: File) {
    if (!file) return;
    if (
      !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
      file.size > 5 * 1024 * 1024
    ) {
      toast.error("Choose a JPG, PNG, or WebP image under 5 MB.");
      return;
    }
    setBusy(true);
    const form = new FormData();
    form.append("image", file);
    try {
      const result = await api<{ url: string }>("/account/images", {
        method: "POST",
        body: form,
      });
      onChange(result.url);
      toast.success("Image uploaded.");
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="upload-field">
      <label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      <div className="upload-box">
        {value && <img src={value} alt={`${label} preview`} />}
        <div>
          <Upload size={22} />
          <p>
            {busy
              ? "Uploading your image…"
              : "Choose an image to make it yours"}
          </p>
          <input
            id={id}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            disabled={busy}
            onChange={(event) => void upload(event.target.files?.[0])}
          />
          <small>JPG, PNG, WebP · up to 5 MB</small>
        </div>
      </div>
      <input type="hidden" name="bannerImage" value={value} />
    </div>
  );
}
