<?php

class PDOFactory
{
    public PDO $pdo;

    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=db;dbname=data', 'root', 'admin');
    }

    /**
     * @return PDO
     */
    public function getPdo(): PDO
    {
        return $this->pdo;
    }
}
