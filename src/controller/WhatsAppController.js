class WhatsAppController {
  constructor() {
    this.elementPrototype();
    this.loadElements();
    this.initEvents();
  }

  // Inicializa todos os elementos do DOM com id
  loadElements() {
    this.el = {};
    document.querySelectorAll("[id]").forEach((element) => {
      this.el[Format.getCamelCase(element.id)] = element;
    });
  }

  // Adiciona métodos personalizados a todo elemento HTML
  elementPrototype() {
    Element.prototype.hide = function () {
      this.style.display = "none";
      return this;
    };

    Element.prototype.show = function () {
      this.style.display = "block";
      return this;
    };

    Element.prototype.toggle = function () {
      this.style.display = this.style.display === "none" ? "block" : "none";
      return this;
    };

    // Corrigido: divide por espaço e adiciona múltiplos eventos
    Element.prototype.on = function (events, fn) {
      events.split(" ").forEach((event) => {
        this.addEventListener(event, fn);
      });
      return this;
    };

    // Corrigido: iterar sobre "styles", não "style"
    Element.prototype.css = function (styles) {
      for (let name in styles) this.style[name] = styles[name];
      return this;
    };

    Element.prototype.addClass = function (name) {
      this.classList.add(name);
      return this;
    };

    Element.prototype.removeClass = function (name) {
      this.classList.remove(name);
      return this;
    };

    Element.prototype.toggleClass = function (name) {
      this.classList.toggle(name);
      return this;
    };

    Element.prototype.hasClass = function (name) {
      return this.classList.contains(name);
    };
  }

  // Eventos de clique
  initEvents() {
    if (this.el.myPhoto) {
      this.el.myPhoto.on("click", (e) => {
        this.el.panelEditProfile.addClass("open");
      });
    }

    if (this.el.btnNewCtt) {
      this.el.btnNewCtt.on("click", (e) => {
        this.el.panelEditProfile.addClass("open");
      });
    }

    if (this.el.btnClosePanelEditProfile) {
      this.el.btnClosePanelEditProfile.on("click", (e) => {
        this.el.panelEditProfile.removeClass("open");
      });
    }
  }
}
    