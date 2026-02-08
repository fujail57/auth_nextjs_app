type UserProfileProps = {
  params: {
    id: string;
  };
};

export default async function UserProfile({ params }: UserProfileProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Profile page</h1>
      <hr />
      <p>
        This is profile page:{" "}
        <span className="bg-white text-xl text-red-500">{id}</span>
      </p>
    </div>
  );
}
