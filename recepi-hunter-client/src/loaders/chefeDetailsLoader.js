const chefeDetailsLoader = async ({ params }) => {
  const res = await fetch(
    `https://b7a10-chef-recipe-hunter-server-side-masudrahma-masudrahman-dev.vercel.app/home/${params.id}`
  );
  const data = await res.json();

  return data;
};

export default chefeDetailsLoader;
