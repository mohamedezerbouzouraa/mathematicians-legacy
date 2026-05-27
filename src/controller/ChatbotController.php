<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
class ChatbotController extends AbstractController
    
{   #[Route('/chatbot', name: 'chatbot')]
    public function index()
    {
        return $this->render('mathematicians/chatbot.html.twig');
    }
}
