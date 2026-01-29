# 💈 BarberBook - Application de Réservation Coiffeur

Bienvenue dans BarberBook ! Ce projet est une solution complète de gestion de rendez-vous pour un salon de coiffure.

## 🏗️ Structure du Projet

- **/backend** : Le cerveau de l'application (Kotlin + Spring Boot).
- **/frontend** : La vitrine client (React + Vite).
- **/mobile** : Le QG du barbier (Android + Jetpack Compose).

## 🚀 Démarrage Rapide

## 🌍 Mise en Production

Le projet est conçu pour être "Production Ready" avec quelques ajustements :

### 1. Base de données
Actuellement, le projet utilise **H2** (en mémoire). Pour la production :
- Changez `application.properties` pour utiliser **PostgreSQL** ou **MySQL**.
- Recommandation : Utilisez **Supabase** pour une base de données cloud gratuite et rapide.

### 2. Sécurité
- La suppression des créneaux est **strictement** limitée à l'usage du numéro de téléphone comme identifiant unique.
- Le Backend renvoie désormais des messages clairs (Succès/Erreur) pour guider l'utilisateur.

## 🛑 Problème GitHub "Repository not found" ?

Si vous avez cette erreur au moment du `push` :
1. Allez sur [github.com/new](https://github.com/new).
2. **CRÉEZ** impérativement un dépôt nommé `BarberBook` (ne cochez rien d'autre).
3. Une fois créé, relancez : `git push -u origin main`.
