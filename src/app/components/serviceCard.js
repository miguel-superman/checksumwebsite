import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCard = ({ icon: Icon, title, description, features, href }) => {
  return (
    <Card className="card-gradient hover:shadow-glow transition-all duration-300 group">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="security" className="w-full" asChild>
          <a href={href}>Learn More</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
