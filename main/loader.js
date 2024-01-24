document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelectorAll('.container-content').forEach(function (item, index) {
        setTimeout(function () {
          item.classList.add('loaded');
        }, index * 200); // Ajusta el retraso entre elementos según sea necesario
      });
    }, 500); // Ajusta el retraso inicial según sea necesario
  });