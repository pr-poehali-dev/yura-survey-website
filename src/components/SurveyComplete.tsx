import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const SurveyComplete = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Спасибо!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Ваша анкета успешно отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
        
        <Link to="/">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};
