<?php

namespace App\Controller\Pages\Training;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TrainingController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('pages/training/checkmate/index.html.twig');
    }
}
