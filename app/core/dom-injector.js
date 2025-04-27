const domInjector = (objectUrl, content, destinationElement) => {
  content.forEach(({ title, imageUrl, description }) => {
    fetch(objectUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        if (title) {
          data = data.replace(/{{ title }}/g, title);
        }
        if (imageUrl) {
          data = data.replace(/{{ url }}/g, imageUrl);
        }
        if (description) {
          data = data.replace(/{{ description }}/g, description);
        }
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;
        const _data = tempDiv.firstChild;

        document.getElementById(destinationElement).appendChild(_data);
      })
      .catch((error) => {
        console.error(error);
        document.getElementById(
          destinationElement
        ).innerHTML = `<p>Error loading content. Please reload.</p>`;
      });
  });
};
