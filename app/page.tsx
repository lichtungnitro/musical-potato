import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Anyone who cares about the fruits must first look to, and reform, the root.
        Once you realize that the distant starry sky is nothing other than the moral law
        within, you see that there is truly nothing “outside” the mind. When the thief
        in the mind is removed, no thief remains outside.`}
      </p>
      <p className="mb-4">
        {`Start by uprooting the thief through the six faculties, only then does the true
        fruit ripen. A blossom may look like a mere illusion of the plant, yet in each
        organism it is both harmless and indispensable.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
