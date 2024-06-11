export const ImageDownload = (imageUrl: string) => {
  var a = document.createElement("a");
  a.href = imageUrl;
  a.target = "_blank";
  a.download = "image";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
