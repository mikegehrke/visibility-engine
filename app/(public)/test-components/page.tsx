import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import { H1, H2, H3, H4, Body, Lead, Small, Label } from '@/components/shared/Typography';

// Static export
export const dynamic = 'force-static';
export const revalidate = false;

export default function ComponentTestPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      {/* Typography Section */}
      <section className="space-y-6">
        <H1>Design System Typography</H1>
        <H2>Headline Level 2</H2>
        <H3>Headline Level 3</H3>
        <H4>Headline Level 4</H4>
        <Lead>Lead text - larger body text for introductions and important information.</Lead>
        <Body>Body text - standard paragraph text for regular content with optimal reading experience.</Body>
        <Small>Small text - for captions, meta information, and less important content.</Small>
        <Label>Label text - for form labels and emphasized inline text</Label>
      </section>

      {/* Button Section */}
      <section className="space-y-6">
        <H3>Button Variants</H3>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <Body className="w-32">Primary:</Body>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
          
          <div className="flex gap-4 items-center">
            <Body className="w-32">Secondary:</Body>
            <Button variant="secondary" size="sm">Small</Button>
            <Button variant="secondary" size="md">Medium</Button>
            <Button variant="secondary" size="lg">Large</Button>
          </div>
          
          <div className="flex gap-4 items-center">
            <Body className="w-32">Ghost:</Body>
            <Button variant="ghost" size="sm">Small</Button>
            <Button variant="ghost" size="md">Medium</Button>
            <Button variant="ghost" size="lg">Large</Button>
          </div>
          
          <div className="flex gap-4 items-center">
            <Body className="w-32">Disabled:</Body>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="space-y-6">
        <H3>Card Variants</H3>
        
        <div className="grid grid-cols-3 gap-4">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>With subtle shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <Body>Card content goes here. This variant has a subtle shadow effect.</Body>
            </CardContent>
          </Card>
          
          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>With border, no shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <Body>Card content goes here. This variant has a border instead of shadow.</Body>
            </CardContent>
          </Card>
          
          <Card variant="flat">
            <CardHeader>
              <CardTitle>Flat Card</CardTitle>
              <CardDescription>Background only</CardDescription>
            </CardHeader>
            <CardContent>
              <Body>Card content goes here. This variant is the most subtle with just a background.</Body>
            </CardContent>
          </Card>
        </div>
        
        <Card variant="elevated" padding="compact">
          <CardHeader>
            <CardTitle>Compact Padding</CardTitle>
            <CardDescription>Less space for denser layouts</CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Combined Example */}
      <section className="space-y-6">
        <H3>Combined Example</H3>
        
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Newsletter Subscription</CardTitle>
            <CardDescription>Stay updated with our latest features and news</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Body className="text-sm text-slate">We'll never share your email with anyone else.</Body>
            </div>
            <div className="flex gap-2">
              <Button variant="primary">Subscribe</Button>
              <Button variant="ghost">Maybe Later</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
