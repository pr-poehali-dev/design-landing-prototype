import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Освойте основы дизайна <br />за <span className="text-primary">8 недель</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный онлайн-курс для тех, кто хочет создавать красивые и функциональные дизайны
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Подробнее о курсе
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                О курсе
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                «Основы дизайна» — это комплексная программа обучения, которая охватывает все ключевые аспекты 
                современного дизайна: от теории цвета и типографики до создания полноценных дизайн-проектов.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Вы научитесь работать с профессиональными инструментами, разовьете дизайнерское мышление 
                и создадите портфолио, которое поможет начать карьеру в индустрии.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">8 недель интенсива</h3>
                    <p className="text-muted-foreground">Структурированная программа с практическими заданиями</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Живая обратная связь</h3>
                    <p className="text-muted-foreground">Еженедельные созвоны с преподавателем и проверка работ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Портфолио проектов</h3>
                    <p className="text-muted-foreground">Реальные кейсы для вашего профессионального портфолио</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Palette" size={120} className="text-primary mx-auto mb-6" />
                  <p className="text-xl font-semibold text-foreground">Креативность + Технологии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Преимущества обучения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему студенты выбирают наш курс для старта карьеры в дизайне
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="BookOpen" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Структура</h3>
                <p className="text-muted-foreground">
                  Логичная программа от простого к сложному с четкими этапами роста
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Менторство</h3>
                <p className="text-muted-foreground">
                  Личный куратор и еженедельные встречи с экспертами индустрии
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Практика</h3>
                <p className="text-muted-foreground">
                  Реальные проекты и кейсы от ведущих компаний для портфолио
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Сертификат</h3>
                <p className="text-muted-foreground">
                  Официальный документ о прохождении курса для резюме
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Отзывы студентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Истории успеха наших выпускников
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    А
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Анна Смирнова</h4>
                    <p className="text-sm text-muted-foreground">UI/UX дизайнер</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Курс помог мне структурировать знания и научиться думать как профессиональный дизайнер. 
                  Уже через месяц после окончания получила первый заказ!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    Д
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Дмитрий Волков</h4>
                    <p className="text-sm text-muted-foreground">Графический дизайнер</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Отличная программа для новичков! Преподаватели объясняют сложные вещи простым языком. 
                  Теперь работаю в крутой студии."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/80 to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    М
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Мария Петрова</h4>
                    <p className="text-sm text-muted-foreground">Веб-дизайнер</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Лучшая инвестиция в себя! Курс дал не только навыки, но и уверенность в своих силах. 
                  Портфолио получилось огонь 🔥"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Готовы начать обучение?
              </h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами для консультации
              </p>
            </div>
            <Card className="shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о своих целях и ожиданиях от курса"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-6 hover:scale-[1.02] transition-transform">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Основы дизайна</h3>
              <p className="text-background/80">
                Профессиональный онлайн-курс для начинающих дизайнеров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@designcourse.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>© 2024 Основы дизайна. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
