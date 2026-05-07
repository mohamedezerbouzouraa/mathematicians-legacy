<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class MathematicianController extends AbstractController
{
    #[Route('/mathematicians', name: 'mathematicians')]
    public function index(): Response
    {
        return $this->render('mathematicians/index.html.twig');
    }
}
