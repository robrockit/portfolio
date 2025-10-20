# UI Components Documentation

This document provides comprehensive documentation for the reusable UI components in the design system.

## Table of Contents

- [Button](#button)
- [Card](#card)
- [Badge](#badge)
- [Container](#container)
- [Section](#section)

---

## Button

A flexible button component with multiple variants and sizes.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary"` \| `"secondary"` \| `"ghost"` | `"primary"` | Visual style variant |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Size of the button |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `React.ReactNode` | - | Button content |
| ...rest | `ButtonHTMLAttributes` | - | Standard button attributes |

### Variants

- **Primary**: Solid primary color background with hover effects
- **Secondary**: Solid secondary color background with hover effects
- **Ghost**: Transparent background with hover overlay

### Features

- ✅ Focus ring for keyboard navigation
- ✅ Active scale animation on click
- ✅ Disabled state with reduced opacity
- ✅ Fully accessible with proper ARIA attributes
- ✅ Supports all standard button props via spread

### Usage Examples

```tsx
import { Button } from "@/components/ui";

// Primary button (default)
<Button onClick={handleClick}>
  Click me
</Button>

// Secondary button with large size
<Button variant="secondary" size="lg">
  Learn More
</Button>

// Ghost button with small size
<Button variant="ghost" size="sm">
  Cancel
</Button>

// Disabled button
<Button disabled>
  Disabled
</Button>

// With icon
<Button>
  <Icon className="mr-2" />
  Save Changes
</Button>

// As a link (with type attribute)
<Button as="a" href="/about">
  Go to About
</Button>
```

### Styling

The component uses Tailwind CSS classes and respects theme colors:
- Primary: `bg-primary`, `text-primary-foreground`
- Secondary: `bg-secondary`, `text-secondary-foreground`
- Ghost: `bg-transparent`, hover state with `bg-muted`

---

## Card

A versatile card component with optional hover effects and composition subcomponents.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hover` | `boolean` | `true` | Enable hover effects (lift, shadow, border) |
| `children` | `React.ReactNode` | - | Card content |
| ...rest | `HTMLAttributes<HTMLDivElement>` | - | Standard div attributes |

### Subcomponents

- **CardHeader**: Container for card header content (with bottom margin)
- **CardTitle**: Semantic heading (h3) with title styling
- **CardDescription**: Muted text for descriptions
- **CardContent**: Main content area
- **CardFooter**: Footer section (with top margin)

### Features

- ✅ Hover effects: shadow, translate, border color change
- ✅ Composition pattern for flexible layouts
- ✅ Theme-aware with CSS custom properties
- ✅ Smooth transitions with duration from design tokens
- ✅ Rounded corners and border styling

### Usage Examples

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui";

// Basic card
<Card>
  <p>Simple card content</p>
</Card>

// Card without hover effects
<Card hover={false}>
  <p>Static card</p>
</Card>

// Fully composed card
<Card>
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>
      A brief description of this feature
    </CardDescription>
  </CardHeader>

  <CardContent>
    <p>Main content goes here with detailed information.</p>
  </CardContent>

  <CardFooter>
    <Button variant="ghost" size="sm">
      Learn More
    </Button>
  </CardFooter>
</Card>

// Card with custom styling
<Card className="border-primary">
  <CardHeader>
    <CardTitle className="text-primary">
      Highlighted Card
    </CardTitle>
  </CardHeader>
  <CardContent>
    Custom styled content
  </CardContent>
</Card>
```

### Hover Effects

When `hover={true}` (default):
- Shadow increases to `lg`
- Translates upward by 4px (`-translate-y-1`)
- Border color changes to `primary/50`
- Cursor changes to pointer

---

## Badge

A small label component for tags, status indicators, and metadata.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default"` \| `"primary"` \| `"secondary"` \| `"success"` \| `"warning"` \| `"error"` | `"default"` | Color scheme variant |
| `size` | `"sm"` \| `"md"` | `"md"` | Size of the badge |
| `children` | `React.ReactNode` | - | Badge content |
| ...rest | `HTMLAttributes<HTMLSpanElement>` | - | Standard span attributes |

### Variants

- **Default**: Muted gray background
- **Primary**: Primary color with light background
- **Secondary**: Secondary color with light background
- **Success**: Green color scheme for positive states
- **Warning**: Yellow color scheme for caution states
- **Error**: Red color scheme for error states

### Features

- ✅ Six semantic color variants
- ✅ Two size options (small, medium)
- ✅ Theme-aware with dark mode support
- ✅ Fast transition animations
- ✅ Inline-flex for proper alignment with text

### Usage Examples

```tsx
import { Badge } from "@/components/ui";

// Default badge
<Badge>New</Badge>

// Primary badge (medium size)
<Badge variant="primary">Featured</Badge>

// Success badge (small size)
<Badge variant="success" size="sm">
  Active
</Badge>

// Warning badge
<Badge variant="warning">
  Pending Review
</Badge>

// Error badge
<Badge variant="error">
  Urgent
</Badge>

// In a list of tags
<div className="flex gap-2">
  <Badge variant="primary">React</Badge>
  <Badge variant="primary">TypeScript</Badge>
  <Badge variant="primary">Next.js</Badge>
</div>

// With icon
<Badge variant="success">
  <CheckIcon className="mr-1 h-3 w-3" />
  Verified
</Badge>

// As status indicator
<div className="flex items-center gap-2">
  <h3>Project Status:</h3>
  <Badge variant="success">In Progress</Badge>
</div>
```

### Color Schemes

All variants support both light and dark themes automatically:

- **Success**: Green (`green-600` light / `green-400` dark)
- **Warning**: Yellow (`yellow-600` light / `yellow-400` dark)
- **Error**: Red (`red-600` light / `red-400` dark)

---

## Container

A responsive container component for consistent page width and padding.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"full"` | `"lg"` | Maximum width of container |
| `children` | `React.ReactNode` | - | Container content |
| ...rest | `HTMLAttributes<HTMLDivElement>` | - | Standard div attributes |

### Max Widths

- **sm**: `max-w-2xl` (672px)
- **md**: `max-w-4xl` (896px)
- **lg**: `max-w-6xl` (1152px)
- **xl**: `max-w-7xl` (1280px)
- **full**: `max-w-full` (100%)

### Usage

```tsx
import { Container } from "@/components/ui";

<Container size="lg">
  <h1>Page Content</h1>
</Container>
```

---

## Section

A semantic section wrapper with consistent spacing.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Section content |
| ...rest | `HTMLAttributes<HTMLElement>` | - | Standard section attributes |

### Usage

```tsx
import { Section } from "@/components/ui";

<Section id="about">
  <h2>About Us</h2>
  <p>Content here...</p>
</Section>
```

---

## Best Practices

### Accessibility

- Always provide meaningful button text or `aria-label`
- Use semantic HTML (buttons for actions, links for navigation)
- Ensure sufficient color contrast for badges
- Use proper heading hierarchy in cards

### Performance

- Components use `forwardRef` for ref forwarding
- Tailwind classes are optimized and tree-shaken in production
- Animations use CSS transitions (GPU-accelerated)

### Composition

```tsx
// Good: Compose components for flexibility
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Action</Button>
  </CardContent>
</Card>

// Also good: Simple usage when composition isn't needed
<Badge variant="success">Active</Badge>
```

### Theming

All components support theme switching via CSS custom properties:
- Colors: `--primary`, `--secondary`, `--muted`, etc.
- Timing: `--duration-fast`, `--duration-normal`
- Components automatically adapt to light/dark themes

---

## Development Notes

### Adding New Components

1. Create component file in `src/components/ui/`
2. Follow existing patterns (forwardRef, TypeScript types)
3. Export from `index.ts` barrel file
4. Document in this file with examples
5. Ensure theme compatibility

### Testing Components

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

### Component Architecture

- **Variants**: Use discriminated unions for variant props
- **Sizes**: Provide sm/md/lg options where applicable
- **Refs**: Use `forwardRef` for DOM access
- **Types**: Export prop interfaces for consumer usage
- **Defaults**: Set sensible defaults for optional props
