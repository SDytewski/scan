$(function () {
  const productCode = localStorage.getItem("product-code");
  if (productCode) {
    $("#product-input").val(productCode);
    setTimeout(() => {
      alert(`Searching for product ${$("#product-input").val()}`);
    }, 150)
  }

  $("#product-search").on("click", () => {
    alert(`Searching for product ${$("#product-input").val()}`);
  });

  $("#clear-local-storage").on("click", () => {
    localStorage.clear();
    $("#product-input").val("")
  });
});
