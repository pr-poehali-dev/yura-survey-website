import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { SurveyComplete } from "@/components/SurveyComplete";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  age: z.string().min(1, { message: "Укажите возраст" }),
  gender: z.enum(["male", "female", "other"], { message: "Выберите пол" }),
  education: z.string({ required_error: "Выберите уровень образования" }),
  feedback: z.string().min(10, { message: "Отзыв должен содержать минимум 10 символов" }).max(500, { message: "Отзыв не должен превышать 500 символов" }),
});

type FormValues = z.infer<typeof formSchema>;

const Index = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      age: "",
      feedback: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SurveyComplete />;
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-foreground">Анкета участника исследования</h1>
          <p className="mt-2 text-sm text-muted-foreground">Все поля обязательны для заполнения</p>
        </div>
        
        <div className="bg-card p-6 sm:p-8 border border-border rounded shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">ФИО</FormLabel>
                    <FormControl>
                      <Input placeholder="Иванов Иван Иванович" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Возраст</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium">Пол</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal text-sm">Мужской</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal text-sm">Женский</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal text-sm">Другой</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Образование</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Выберите уровень образования" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="school">Среднее</SelectItem>
                        <SelectItem value="college">Среднее профессиональное</SelectItem>
                        <SelectItem value="bachelor">Высшее (бакалавр)</SelectItem>
                        <SelectItem value="master">Высшее (магистр)</SelectItem>
                        <SelectItem value="phd">Высшее (аспирантура/докторантура)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Дополнительная информация</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Опишите ваш опыт и квалификацию"
                        className="resize-none h-24 text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Минимум 10 символов, максимум 500
                    </FormDescription>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              
              <div className="pt-2">
                <Button type="submit" className="w-full">
                  Отправить
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Index;