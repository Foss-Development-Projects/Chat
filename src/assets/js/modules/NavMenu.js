const NavMenu = (toggleBtn, menu) => {
	toggleBtn.addEventListener('click', () => {
		menu.classList.toggle("show-emoji-menu")
	})
}
export default NavMenu;