
    // Main body style
    document.body.style.backgroundColor = "#ffe4c4";
    document.body.style.fontFamily = "Arial";

    // Create header
    let header = document.createElement("h1");
    header.innerText = "Welcome to JS DOM Test!!";
    header.style.backgroundColor = "brown";
    header.style.color = "white";
    header.style.padding = "10px";
    header.style.textAlign = "center";
    document.body.appendChild(header);

    // Box info
    let data = {
      books: {
        title: "List of books",
        color: "turquoise",
        items: [
          "book name 1",
          "book name 2",
          "book name 3",
          "book name 4",
          "book name 5"
        ]
      },
      fruits: {
        title: "List of fruits",
        color: "yellowgreen",
        items: [
          "fruit name 1",
          "fruit name 2",
          "fruit name 3",
          "fruit name 4",
          "fruit name 5",
          "fruit name 6",
          { name: "fruit name 7", color: "red" }
        ]
      },
      places: {
        title: "List of places",
        color: "deepskyblue",
        items: [
          "Place name 1",
          "Place name 2",
          "Place name 3",
          "Place name 4"
        ]
      },
      movies: {
        title: "List of movies",
        color: "violet",
        items: [
          "Movie name 1",
          "Movie name 2",
          "Movie name 3",
          "Movie name 4"
        ]
      },
      sports: {
        title: "List of sports",
        color: "red",
        items: [
          { name: "sport name 1", color: "skyblue" },
          "sport name 2",
          "sport name 3",
          "sport name 4"
        ]
      }
    };

    // Wrapper to keep all boxes aligned
    let wrapper = document.createElement("div");
    document.body.appendChild(wrapper);

    // Make boxes
    for (let key in data) {
      let section = data[key];

      // Create box div
      let box = document.createElement("div");
      box.style.border = "2px solid black";
      box.style.padding = "10px";
      box.style.margin = "10px";
      box.style.width = "250px";
      box.style.display = "inline-block";
      box.style.verticalAlign = "top";
      box.style.backgroundColor = "white";

      // Title
      let title = document.createElement("h3");
      title.innerText = section.title;
      title.style.marginTop = "0";
      title.style.color = section.color;
      box.appendChild(title);

      // List
      let ul = document.createElement("ul");

      for (let i = 0; i < section.items.length; i++) {
        let li = document.createElement("li");

        if (typeof section.items[i] === "object") {
          li.innerText = section.items[i].name;
          li.style.color = section.items[i].color;
        } else {
          li.innerText = section.items[i];
        }

        ul.appendChild(li);
      }

      box.appendChild(ul);
      wrapper.appendChild(box);
    }
  