import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="container py-10 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <Badge className="px-3 py-1" variant="secondary">{t('welcome')}</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{t('title')}</h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">{t('about')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('features.featureOne.title')}</CardTitle>
            <CardDescription>{t('features.featureOne.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{t('features.featureOne.content')}</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm">{t('features.learnMore')} →</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('features.featureTwo.title')}</CardTitle>
            <CardDescription>{t('features.featureTwo.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{t('features.featureTwo.content')}</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm">{t('features.learnMore')} →</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('features.featureThree.title')}</CardTitle>
            <CardDescription>{t('features.featureThree.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{t('features.featureThree.content')}</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm">{t('features.learnMore')} →</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild variant="default" size="lg">
          <Link href={ROUTES.about}>
            {t('cta.aboutPage')}
          </Link>
        </Button>
      </div>
    </div>
  );
}