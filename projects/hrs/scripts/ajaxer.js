let functionphp = `http://localhost/portfolio/projects/hrs/server/functions.php`;

function loadEmployees() {
  $.ajax({
    url: functionphp,
    method: "POST",
    data: {
      type: "loadEmployees",
    },
    success: (data) => {
      console.warn(data);
    },
    error: function (request, status, error) {
      console.error(`${request}\n${status}: ${error}`);
    },
  });
}

function filterEmployees() {}
