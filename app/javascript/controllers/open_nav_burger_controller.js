import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="open-nav-burger"
export default class extends Controller {
  static targets = ["burger", "nav"]
  connect() {
    console.log("hay from burger")
  }

  openMenu(e) {
    const burger = this.burgerTarget;
    const nav = this.navTarget;
    nav.classList.toggle("nav-active");
    burger.classList.toggle("open");
  }
}
