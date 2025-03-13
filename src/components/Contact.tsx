
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  content 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: React.ReactNode;
}) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="rounded-full bg-homer/10 p-3">
      <Icon className="h-5 w-5 text-homer" />
    </div>
    <div>
      <h3 className="font-medium text-foreground">{title}</h3>
      <div className="text-muted-foreground">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <AnimatedWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Questions about the Homer AI User Group? Drop us a message and we'll get back to you.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedWrapper animation="fade-up" delay={100} className="md:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <ContactInfo 
                  icon={MapPin} 
                  title="Our Location" 
                  content="Homer, Alaska 99603"
                />
                
                <ContactInfo 
                  icon={Mail} 
                  title="Email Us" 
                  content={
                    <a href="mailto:jjohnson47@alaska.edu" className="hover:text-homer transition-colors">
                      jjohnson47@alaska.edu
                    </a>
                  }
                />
                
                <ContactInfo 
                  icon={Phone} 
                  title="Call Us" 
                  content={
                    <a href="tel:+19072999712" className="hover:text-homer transition-colors">
                      (907) 299-9712
                    </a>
                  }
                />

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-medium mb-2">Group Contact</h4>
                  <p className="text-muted-foreground mb-1">Jeffery Johnson</p>
                  <p className="text-muted-foreground">AI User Group Coordinator</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-up" delay={200} className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full md:w-auto bg-homer hover:bg-homer-dark transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
