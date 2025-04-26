import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  ArrowRight, BookOpen, GiftIcon, Search, ShoppingCart,
  Star, TrendingUp, BookMarked, PencilRuler, Puzzle, Users
} from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

// Dummy data for demo purposes
const featuredBooks = [
  { id: 1, title: 'The Silent Echo', author: 'Eliza Johnson', price: '$19.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.5 },
  { id: 2, title: 'Whispers of the Ocean', author: 'David Wilson', price: '$15.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.8 },
  { id: 3, title: 'Beyond the Horizon', author: 'Sarah Miller', price: '$22.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.2 },
  { id: 4, title: 'Secrets of Tomorrow', author: 'Michael Brown', price: '$17.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.7 },
  { id: 5, title: 'The Lost Garden', author: 'Emily Roberts', price: '$21.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.6 },
  { id: 6, title: 'Midnight Shadows', author: 'James Anderson', price: '$18.50', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.3 },
  { id: 7, title: 'Chronicle of Stars', author: 'Sophia Clark', price: '$24.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.9 },
  { id: 8, title: 'Echoes of Eternity', author: 'Thomas Wright', price: '$19.50', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.4 },
  { id: 9, title: 'Forgotten Realms', author: 'Alexandra Davis', price: '$16.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.7 },
  { id: 10, title: 'The Hidden Truth', author: 'Robert Lewis', price: '$20.99', cover: 'https://placehold.co/200x300/e4e4e7/71717a?text=Book+Cover', rating: 4.8 }
];

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-primary/10 via-primary/5 to-background py-12 md:py-20">
        <div className="container px-4 mx-auto max-w-6xl flex flex-col items-center text-center space-y-6">
          <Badge className="px-6 py-2 text-sm font-medium rounded-full" variant="secondary">
            {t('welcome')}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            {t('about')}
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mt-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('hero.search')}
              className="pl-10 pr-10 py-6 rounded-full border border-input bg-background"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full p-0">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="gap-2 rounded-full px-8">
              <Link href={ROUTES.about}>
                {t('hero.browse')} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              {t('hero.bestsellers')}
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-16 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">{t('categories.title')}</h2>
            <Button variant="ghost" className="flex items-center gap-2">
              {t('categories.viewAll')} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href={ROUTES.about} className="block group">
              <div className="aspect-square bg-primary/5 rounded-xl flex flex-col items-center justify-center p-4 transition-all hover:bg-primary/10">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-medium text-xl">{t('categories.books')}</h3>
              </div>
            </Link>

            <Link href={ROUTES.about} className="block group">
              <div className="aspect-square bg-primary/5 rounded-xl flex flex-col items-center justify-center p-4 transition-all hover:bg-primary/10">
                <PencilRuler className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-medium text-xl">{t('categories.stationery')}</h3>
              </div>
            </Link>

            <Link href={ROUTES.about} className="block group">
              <div className="aspect-square bg-primary/5 rounded-xl flex flex-col items-center justify-center p-4 transition-all hover:bg-primary/10">
                <GiftIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-medium text-xl">{t('categories.gifts')}</h3>
              </div>
            </Link>

            <Link href={ROUTES.about} className="block group">
              <div className="aspect-square bg-primary/5 rounded-xl flex flex-col items-center justify-center p-4 transition-all hover:bg-primary/10">
                <Puzzle className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-medium text-xl">{t('categories.toys')}</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="w-full py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">{t('featured.title')}</h2>
            <Button variant="ghost" className="flex items-center gap-2">
              {t('featured.viewAll')} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="newReleases" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted/50">
                <TabsTrigger value="newReleases" className="text-sm rounded-full">{t('featured.newReleases')}</TabsTrigger>
                <TabsTrigger value="bestsellers" className="text-sm rounded-full">{t('featured.bestsellers')}</TabsTrigger>
                <TabsTrigger value="awardWinners" className="text-sm rounded-full">{t('featured.awardWinners')}</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="newReleases" className="mt-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: false
                }}
                className="w-full relative"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {featuredBooks.map((book) => (
                    <CarouselItem key={book.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                      <Card className="border border-muted overflow-hidden hover:shadow-md transition-all group h-full flex flex-col">
                        <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                          <img
                            src={book.cover}
                            alt={book.title}
                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                          />
                          <button className="absolute top-2 right-2 bg-background/80 p-1.5 rounded-full hover:bg-background shadow-sm">
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <CardContent className="p-3 flex flex-col flex-grow">
                          <h3 className="font-medium text-sm line-clamp-1 mb-0.5">{book.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
                          <div className="flex items-center justify-between mt-auto pt-2">
                            <span className="font-semibold text-sm">{book.price}</span>
                            <div className="flex items-center bg-primary/5 px-1.5 py-0.5 rounded">
                              <Star className="h-3 w-3 fill-primary text-primary mr-0.5" />
                              <span className="text-xs font-medium">{book.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>

            <TabsContent value="bestsellers" className="mt-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: false
                }}
                className="w-full relative"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[...featuredBooks].reverse().map((book) => (
                    <CarouselItem key={book.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                      <Card className="border border-muted overflow-hidden hover:shadow-md transition-all group h-full flex flex-col">
                        <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                          <img
                            src={book.cover}
                            alt={book.title}
                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                          />
                          <button className="absolute top-2 right-2 bg-background/80 p-1.5 rounded-full hover:bg-background shadow-sm">
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <CardContent className="p-3 flex flex-col flex-grow">
                          <h3 className="font-medium text-sm line-clamp-1 mb-0.5">{book.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
                          <div className="flex items-center justify-between mt-auto pt-2">
                            <span className="font-semibold text-sm">{book.price}</span>
                            <div className="flex items-center bg-primary/5 px-1.5 py-0.5 rounded">
                              <Star className="h-3 w-3 fill-primary text-primary mr-0.5" />
                              <span className="text-xs font-medium">{book.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>

            <TabsContent value="awardWinners" className="mt-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: false
                }}
                className="w-full relative"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {featuredBooks.sort((a, b) => b.rating - a.rating).map((book) => (
                    <CarouselItem key={book.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                      <Card className="border border-muted overflow-hidden hover:shadow-md transition-all group h-full flex flex-col">
                        <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                          <img
                            src={book.cover}
                            alt={book.title}
                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                          />
                          <button className="absolute top-2 right-2 bg-background/80 p-1.5 rounded-full hover:bg-background shadow-sm">
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <CardContent className="p-3 flex flex-col flex-grow">
                          <h3 className="font-medium text-sm line-clamp-1 mb-0.5">{book.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
                          <div className="flex items-center justify-between mt-auto pt-2">
                            <span className="font-semibold text-sm">{book.price}</span>
                            <div className="flex items-center bg-primary/5 px-1.5 py-0.5 rounded">
                              <Star className="h-3 w-3 fill-primary text-primary mr-0.5" />
                              <span className="text-xs font-medium">{book.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="w-full py-12 bg-primary/10">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <Badge className="mb-4 px-4 py-1.5" variant="outline">{t('offers.discount')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('offers.title')}</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our collection of bestsellers and new releases at special prices.
            </p>
            <Button asChild variant="default" size="lg" className="gap-2 rounded-full px-8">
              <Link href={ROUTES.about}>
                {t('offers.viewAll')} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {featuredBooks.slice(0, 4).map((book) => (
                <div key={book.id} className="relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="object-cover w-full aspect-[2/3] rounded-lg shadow-lg"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold rounded-full px-3 py-1">
                    -30%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 bg-primary/5 border-y border-primary/10">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('newsletter.title')}</h2>
            <p className="text-muted-foreground mb-6">
              {t('newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="rounded-full flex-1"
              />
              <Button className="rounded-full px-8">
                {t('newsletter.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="container px-4 mx-auto max-w-6xl text-center">
          <Badge className="mb-6 px-4 py-1.5" variant="outline">BANSA Membership</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Book Lovers Community</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto mb-10">
            Get exclusive discounts, early access to new releases, and personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" size="lg" className="gap-2 rounded-full px-8">
              <Link href={ROUTES.about}>
                {t('cta.shop')} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              {t('cta.aboutPage')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}