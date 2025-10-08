# Tooday Educational Center - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Educational Platform Inspiration
Drawing from modern educational platforms (Coursera, Udemy, Skillshare) combined with clean institutional aesthetics. Focus on trust-building, clear information hierarchy, and engaging visual storytelling.

**Core Principles:**
- Professional yet approachable aesthetic
- Clear course/content discovery
- Trust-building through social proof
- Seamless multi-language experience
- Information accessibility without overwhelming users

---

## Color Palette

**Light Mode:**
- Primary: 210 100% 45% (Professional blue - education/trust)
- Secondary: 210 20% 25% (Dark blue-gray for text)
- Accent: 150 60% 45% (Success green for CTAs)
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Border: 210 20% 90%

**Dark Mode:**
- Primary: 210 100% 55%
- Secondary: 210 15% 85%
- Accent: 150 55% 50%
- Background: 220 15% 10%
- Surface: 220 15% 15%
- Border: 210 15% 25%

**Semantic Colors:**
- Success: 150 60% 45%
- Warning: 35 90% 55%
- Error: 0 70% 50%
- Info: 210 100% 50%

---

## Typography

**Font Families:**
- Primary: Inter (headings, UI elements)
- Secondary: Open Sans (body text, descriptions)

**Scale:**
- Display: text-5xl md:text-6xl lg:text-7xl font-bold
- H1: text-4xl md:text-5xl font-bold
- H2: text-3xl md:text-4xl font-semibold
- H3: text-2xl md:text-3xl font-semibold
- H4: text-xl md:text-2xl font-medium
- Body Large: text-lg
- Body: text-base
- Small: text-sm
- Caption: text-xs

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-2, space-x-2
- Component spacing: p-4, p-6, gap-4
- Section padding: py-12 md:py-16 lg:py-20, px-4 md:px-6 lg:px-8
- Large sections: py-16 md:py-20 lg:py-24

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl mx-auto
- Forms: max-w-2xl mx-auto

**Grid Systems:**
- Course cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Teacher profiles: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Stats/features: grid-cols-2 md:grid-cols-4
- Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

---

## Component Library

**Navigation:**
- Sticky header with language switcher (flags/dropdown)
- Logo on left, nav links center, CTA button right
- Mobile: Hamburger menu with slide-in drawer
- Include: Home, Courses, Teachers, About, Events, Contact, Registration (highlighted)

**Hero Section:**
- Full-width with background image overlay (classroom/students)
- H1 heading: "Knowledge for Your Future" (translated)
- Subheading with 2-3 key value propositions
- Dual CTAs: Primary "Kurslarga Yozilish" + Secondary "Kurslarni Ko'rish"
- Statistics bar below: Students count, Years experience, Courses, Success rate

**Course Cards:**
- Image thumbnail (16:9 ratio)
- Course category badge (top-left)
- Course title + short description
- Teacher avatar with name
- Duration, level indicator, price
- "Batafsil" button
- Hover: lift effect with shadow

**Teacher Profiles:**
- Circular avatar (large)
- Name + specialty
- Experience years badge
- Short bio (2-3 lines)
- Social media icons (LinkedIn, Telegram, Instagram)
- "Ko'proq" link to full profile

**Forms:**
- Clean, single-column layout
- Label above input fields
- Input fields: rounded-lg border with focus:ring
- Phone input with country code selector
- Course selection: searchable dropdown
- File upload for documents (if needed)
- Submit button: full-width on mobile, auto on desktop

**Schedule Table:**
- Weekly grid view (Mon-Sun columns)
- Time slots as rows
- Color-coded by course type
- Online/Offline indicators
- Room number display
- Responsive: stack on mobile

**Testimonials:**
- Card-based slider
- Student photo (circular), name, course
- Quote text (2-3 lines)
- Star rating (optional)
- Navigation dots + arrows
- Auto-play with pause on hover

**Gallery:**
- Masonry grid layout
- Category filter tabs: All, Classes, Events, Graduates
- Lightbox on click
- Lazy loading for performance

**Events/News Cards:**
- Featured image (16:9)
- Date badge (top-right)
- Event title + excerpt
- "Read More" link
- Latest 3-6 on home, full archive on events page

**Contact Section:**
- Two-column: Form (left) + Info (right)
- Embedded Google Maps
- Office hours, phone, email, address
- Social media icon links
- Contact form with name, email, message

**Statistics Display:**
- Large numbers with animated counter
- Icons for each stat
- Label below numbers
- 4-column grid on desktop, 2-col on mobile

---

## Multi-Language Implementation

**Language Switcher:**
- Flag icons + language codes (UZ, RU, EN)
- Dropdown in header (desktop)
- Prominent in mobile menu
- Persist selection in localStorage
- RTL support if needed (not required for UZ/RU/EN)

**Content Strategy:**
- All UI elements, labels, buttons translated
- Dynamic content (courses, events) stored with language variants
- URL structure: /uz/, /ru/, /en/ prefixes
- Language-specific meta tags for SEO

---

## Images

**Hero Section:**
- Large hero image: Modern classroom with students engaged in learning
- Overlay: dark gradient (rgba overlay 40% opacity)
- Image should convey: professionalism, youth, technology, collaboration

**Course Cards:**
- Relevant subject imagery (computer for IT, books for languages, etc.)
- Consistent aspect ratio: 16:9
- High-quality, bright, professional photos

**Teachers:**
- Professional headshots
- Circular crop
- Consistent lighting/background style

**Gallery:**
- Mix of: classroom activities, graduation ceremonies, events, student projects
- Authentic photos showcasing real center activities
- Minimum 20-30 images across categories

**About Page:**
- Team photo (full staff)
- Facility photos (classrooms, equipment)
- Achievement/certificate images

---

## Page-Specific Layouts

**Home Page Flow:**
1. Hero with dual CTAs + stats bar
2. About preview (2-col: text + image)
3. Course carousel (6-8 featured courses)
4. Why Choose Tooday (4-col features grid)
5. Teachers preview (4 featured)
6. Testimonials slider
7. Latest events (3-card grid)
8. CTA section (register now)

**Courses Page:**
- Filter sidebar: Category, Level, Price range, Duration
- Grid layout with sorting options
- "Load More" pagination

**Teachers Page:**
- Grid of teacher cards
- Filter by subject/specialty
- Individual teacher modal/page with full bio

**About Page:**
- Mission/Vision cards
- Timeline of milestones
- Full team grid
- Values/advantages section
- Certificates/accreditations display

**Contact Page:**
- Split layout (50/50)
- Map takes full width on mobile
- All contact methods visible
- Office hours clearly displayed

---

## Interactions & Animations

**Use Sparingly:**
- Subtle fade-in on scroll for sections
- Smooth scroll to anchors
- Counter animation for statistics (once on viewport entry)
- Hover lift on cards (transform: translateY(-4px))
- Image crossfade in sliders (no slide animations)

**No Animations:**
- Page transitions
- Excessive parallax
- Distracting motion graphics

---

## Accessibility & Responsiveness

**Breakpoints:**
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2-col layouts)
- Desktop: > 1024px (full multi-column)

**Accessibility:**
- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus indicators on all inputs
- Alt text for all images
- Color contrast ratio > 4.5:1
- Language attribute on html tag

**Dark Mode:**
- System preference detection
- Manual toggle in header
- Consistent across all pages
- Proper contrast maintained