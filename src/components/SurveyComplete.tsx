import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const SurveyComplete = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-8 px-4">
      <div className="max-w-md w-full bg-card p-6 sm:p-8 border border-border rounded shadow-sm text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        
        <h2 className="text-xl font-medium text-foreground mb-2">Форма отправлена</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Благодарим за заполнение анкеты. Ваши данные получены и зарегистрированы в системе.
        </p>
        
        <Link to="/">
          <Button variant="outline" className="w-full">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};
