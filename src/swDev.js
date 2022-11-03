export default function swDev() {
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    console.log("server working");
    navigator.serviceWorker.register(swUrl).then((res) => {
      console.log("response--------", res);
    });
  } else {
    console.log("server not working");
  }
}
