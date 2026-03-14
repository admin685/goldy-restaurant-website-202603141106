# La Belle Cuisine - Restaurant Website

A beautifully crafted, multi-page restaurant website featuring modern design, smooth animations, and interactive elements. This project showcases a fine dining establishment with French-inspired cuisine.

![La Belle Cuisine](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🍽️ Overview

La Belle Cuisine is a sophisticated restaurant website designed to provide an elegant online presence for an upscale dining establishment. The website features a warm color palette, refined typography, and seamless user experience across all devices.

## ✨ Features

### Pages
- **Home** (`index.html`) - Hero section, about preview, featured dishes, testimonials, and newsletter signup
- **Menu** (`menu.html`) - Full menu with category filtering, beautifully presented dishes with pricing
- **About** (`about.html`) - Restaurant history, team members, philosophy, and awards
- **Contact** (`contact.html`) - Contact information, reservation form, and embedded map

### Interactive Elements
- Responsive navigation with mobile hamburger menu
- Smooth scroll animations
- Menu category filtering
- Form validation
- Back-to-top button
- Hover effects and transitions
- Scroll-triggered navbar styling

### Design Features
- Modern, elegant aesthetic with gold accent colors
- Custom typography using Google Fonts (Playfair Display & Poppins)
- CSS custom properties for consistent theming
- Fully responsive layout for all screen sizes
- High-quality Unsplash imagery

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox, Grid, and CSS Variables
- **JavaScript** - Interactive functionality and DOM manipulation
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Playfair Display, Poppins)

## 📁 Project Structure

restaurant-website/
├── index.html          # Home page
├── menu.html           # Menu page with filtering
├── about.html          # About us page
├── contact.html        # Contact and reservations
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Project documentation

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/yourusername/restaurant-website.git
   ```

2. **Navigate** to the project directory:
   ```bash
   cd restaurant-website
   ```

3. **Open** `index.html` in your browser, or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. **Visit** `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

| Breakpoint | Target Devices |
|------------|----------------|
| < 576px    | Mobile phones  |
| 576-768px  | Large phones / Small tablets |
| 768-992px  | Tablets |
| 992-1200px | Small laptops |
| > 1200px   | Desktops |

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Gold | `#c9a227` | Accents, buttons, highlights |
| Dark Gold | `#a8861e` | Hover states |
| Secondary Navy | `#1a1a2e` | Headings, dark backgrounds |
| Light Background | `#faf9f6` | Page backgrounds |
| Dark Background | `#0f0f1a` | Footer, overlays |

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #c9a227;
    --secondary-color: #1a1a2e;
    /* ... other variables */
}
```

### Updating Content
- Edit HTML files directly to change text, images, and menu items
- Replace Unsplash image URLs with your own images
- Update contact information in `contact.html`

### Adding Menu Items
In `menu.html`, add new menu items following this structure:
```html
<div class="menu-item" data-category="category-name">
    <img src="image-url" alt="Dish name">
    <h4>Dish Name</h4>
    <p>Description</p>
    <span class="price">$XX</span>
</div>
```

## 📧 Contact Form

The contact form includes client-side validation. To make it functional:
1. Integrate with a form service (Formspree, Netlify Forms, etc.)
2. Set up a backend endpoint
3. Use EmailJS for client-side email sending

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Images**: [Unsplash](https://unsplash.com)
- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)

## 👨‍💻 Author

Created with ❤️ for fine dining enthusiasts

---

**Live Demo**: [View Demo](#) | **Report Issues**: [GitHub Issues](#)