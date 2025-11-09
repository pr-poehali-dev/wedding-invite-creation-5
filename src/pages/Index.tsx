import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const schedule = [
    { time: '15:00', event: 'Сбор гостей' },
    { time: '15:30', event: 'Церемония' },
    { time: '16:30', event: 'Фотосессия и коктейль' },
    { time: '18:00', event: 'Банкет' },
    { time: '20:00', event: 'Торт и первый танец' },
    { time: '21:00', event: 'Вечеринка' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-8">
            {[
              { id: 'hero', label: 'Главная' },
              { id: 'details', label: 'Детали' },
              { id: 'schedule', label: 'Программа' },
              { id: 'location', label: 'Место' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Приглашаем на свадьбу
            </p>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-light tracking-tight">
              Анна & Михаил
            </h1>
            <Separator className="max-w-xs mx-auto" />
            <p className="text-2xl md:text-3xl font-light text-muted-foreground">
              15 июня 2025
            </p>
          </div>

          <div className="pt-8">
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Мы будем рады разделить с вами самый важный день нашей жизни
            </p>
          </div>

          <button
            onClick={() => scrollToSection('details')}
            className="mt-12 inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            Подробнее
            <Icon name="ChevronDown" size={16} />
          </button>
        </div>
      </section>

      <section id="details" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Детали</h2>
            <Separator className="max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Дата</h3>
                <p className="text-muted-foreground">15 июня 2025</p>
                <p className="text-sm text-muted-foreground">Воскресенье</p>
              </div>
            </Card>

            <Card className="p-8 text-center space-y-4 border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Время</h3>
                <p className="text-muted-foreground">Начало в 15:00</p>
                <p className="text-sm text-muted-foreground">Просим не опаздывать</p>
              </div>
            </Card>

            <Card className="p-8 text-center space-y-4 border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <Icon name="Shirt" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Дресс-код</h3>
                <p className="text-muted-foreground">Элегантный стиль</p>
                <p className="text-sm text-muted-foreground">Светлые оттенки</p>
              </div>
            </Card>
          </div>

          <Card className="mt-12 p-8 border-border/50 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Место проведения</h3>
                <p className="text-muted-foreground">Усадьба «Ясная Поляна»</p>
                <p className="text-sm text-muted-foreground">
                  Московская область, Истринский район, д. Лужки
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="schedule" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Программа</h2>
            <Separator className="max-w-xs mx-auto" />
          </div>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 flex-shrink-0">
                  <span className="text-lg font-light text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                  {index < schedule.length - 1 && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-12 bg-border" />
                  )}
                </div>
                <Card className="flex-1 p-6 border-border/50 shadow-sm group-hover:shadow-md transition-shadow">
                  <p className="text-lg">{item.event}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Как добраться</h2>
            <Separator className="max-w-xs mx-auto" />
          </div>

          <Card className="overflow-hidden border-border/50 shadow-lg">
            <div className="aspect-video w-full bg-muted relative group cursor-pointer">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A64b1e7b8f3c5a1e4c8d9f2a3b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0"
                title="Карта места проведения"
              ></iframe>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Icon name="Car" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">На автомобиле</h3>
                  <p className="text-sm text-muted-foreground">
                    По Новорижскому шоссе, 45 км от МКАД. Бесплатная парковка на территории.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <Icon name="Bus" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Трансфер</h3>
                  <p className="text-sm text-muted-foreground">
                    Организуем комфортабельный трансфер от метро Тушинская в 14:00. 
                    Подтвердите участие заранее.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-3xl font-light">До встречи!</p>
          <p className="text-sm text-muted-foreground">
            С любовью, Анна & Михаил
          </p>
        </div>
      </footer>
    </div>
  );
}
