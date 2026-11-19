"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "./auth-provider";
import { ImageUpload } from "./image-upload";
import { Avatar } from "./site-header";
import { api, json } from "@/lib/api";
export function ProfileForm() {
  const { user, refresh } = useAuth();
  const [image, setImage] = useState(user?.image ?? "");
  const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    try {
      await api(
        "/account/profile",
        json("PATCH", {
          name: fields.name,
          phone: fields.phone,
          bio: fields.bio,
          image,
        }),
      );
      await refresh();
      toast.success("Your profile has been updated.");
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">MAKE YOURSELF AT HOME</p>
        <h1>Your Profile</h1>
        <p>A little about you goes a long way.</p>
      </div>
      <div className="form-card profile-form">
        <div className="profile-summary">
          <Avatar name={user?.name ?? ""} image={image} />
          <div>
            <h2>{user?.name}</h2>
            <p className="muted">{user?.email}</p>
          </div>
        </div>
        <form onSubmit={submit}>
          <label>
            Full name
            <input
              name="name"
              defaultValue={user?.name}
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
            />
          </label>
          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              defaultValue={user?.phone}
              maxLength={25}
              autoComplete="tel"
            />
          </label>
          <label>
            About you
            <textarea
              name="bio"
              rows={5}
              maxLength={1000}
              defaultValue={user?.bio}
              placeholder="Tell students or tutors a little about yourself."
            />
          </label>
          <ImageUpload
            label="Profile photo"
            value={image}
            onChange={setImage}
          />
          <button className="btn btn-primary" disabled={busy}>
            {busy ? "Saving…" : "Save profile"}
          </button>
        </form>
      </div>
    </>
  );
}
