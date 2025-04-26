import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    const commonT = useTranslations('Common');

    return (
        <div className="container py-10 space-y-8">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{t('title')}</h1>
                <p className="text-xl text-muted-foreground">
                    {t('subtitle')}
                </p>
            </div>

            <Separator className="my-8" />

            <Tabs defaultValue="mission" className="max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="mission">{t('tabs.mission')}</TabsTrigger>
                    <TabsTrigger value="team">{t('tabs.team')}</TabsTrigger>
                    <TabsTrigger value="values">{t('tabs.values')}</TabsTrigger>
                </TabsList>
                <TabsContent value="mission" className="space-y-4">
                    <Card>
                        <CardContent className="pt-6">
                            <p className="text-lg">
                                {t('mission.content')}
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="team" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center space-y-3">
                                <Avatar className="h-24 w-24">
                                    <AvatarFallback>TM</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="font-medium">{t('team.member')} {i}</h3>
                                    <p className="text-sm text-muted-foreground">{t('team.position')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="values" className="space-y-4">
                    <Card>
                        <CardContent className="pt-6 space-y-4">
                            <div>
                                <h3 className="font-semibold">{t('values.innovation.title')}</h3>
                                <p>{t('values.innovation.description')}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">{t('values.integrity.title')}</h3>
                                <p>{t('values.integrity.description')}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">{t('values.collaboration.title')}</h3>
                                <p>{t('values.collaboration.description')}</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-12">
                <Button asChild variant="outline">
                    <Link href={ROUTES.home}>
                        {commonT('navigation.backToHome')}
                    </Link>
                </Button>
            </div>
        </div>
    );
}