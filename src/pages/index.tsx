export default function Page() {
  console.log("====================================");
  console.log(process.env.assetPrefix);
  console.log("====================================");
  return (
    <div>
      <div>Hello, Next.js! ở pages</div>;
      <img src={`${process.env.assetPrefix}/d9CSD.png`} alt="Description" />
    </div>
  );
}
